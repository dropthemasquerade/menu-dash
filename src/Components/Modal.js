import React, { useState, useEffect } from 'react';
import { storage, db } from "./firebase";
import { useParams, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import "./profile.css";


const initialState = {
    name: "",
    location: "",
    date: "",
    details: ""
};

const AddEdit = () => {
    const [data, setData] = useState(initialState);
    const { name, location, date, email } = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const getSingleUser = async () => {
            const docRef = doc(db, "events", id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                setData({ ...snapshot.data() });
            }
        }
        id && getSingleUser();
    }, [id])


    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("status_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            }, (error) => {
                console.log(error)
            },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }));
                    });
                }
            );
        };

        file && uploadFile()
    }, [file])


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };


    const validate = () => {
        let errors = {};
        if (!name) {
            errors.name = "Name is required"
        }
        if (!location) {
            errors.location = "Location is required"
        }
        if (!date) {
            errors.date = "Date is required"
        }
        if (!email) {
            errors.email = "Email is required"
        }

        return errors;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = validate();
        if (Object.keys(errors).length) return setErrors(errors);
        setIsSubmit(true);
        if (!id) {
            try {
                await addDoc(collection(db, "events"), {
                    ...data,
                    timestamp: serverTimestamp()
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            try {
                await updateDoc(doc(db, "events", id), {
                    ...data,
                    timestamp: serverTimestamp()
                });
            } catch (error) {
                console.log(error);
            }
        }

        navigate("/profile");
    };


    return (
        <section className="form-container">
            {isSubmit ? <div className="updating">Updating...</div> : (
                <>
                    <h1 className="edit-title">{id ? "Edit Profile" : "Add your profile"}</h1>
                    <form onSubmit={handleSubmit} className="profile-form">
                        <section>
                            <section >
                                <label htmlFor="image">Event Image</label>
                                <input
                                    className="p-image"
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                            </section>
                        </section>


                        <section>
                            <article>
                                <aside>
                                    <label htmlFor="Event Name">User's Name</label>
                                    <input
                                        name="name"
                                        error={errors.name ? { content: errors.name } : null}
                                        onChange={handleChange}
                                        value={name}
                                        className="fill-form"
                                    />
                                </aside>
                            </article>

                            <article>
                                <aside>
                                    <label htmlFor="Event email" for="message" >Email Address</label>
                                    <input
                                        name="email"
                                        error={errors.email ? { content: errors.email } : null}
                                        onChange={handleChange}
                                        value={email}
                                        className="fill-form">
                                    </input>
                                </aside>
                            </article>


                            <article>
                                <aside>
                                    <label htmlFor="Event Date">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="date"
                                        error={errors.date ? { content: errors.date } : null}
                                        onChange={handleChange}
                                        value={date}
                                        className="fill-form"
                                    />
                                </aside>
                            </article>


                            <article>
                                <aside>
                                    <label htmlFor="Event Location">User's Location</label>
                                    <input
                                        name="location"
                                        error={errors.location ? { content: errors.location } : null}
                                        onChange={handleChange}
                                        value={location}
                                        className="fill-form"
                                    />
                                </aside>
                            </article>

                            <figure>
                                <button
                                    type="submit"
                                    disabled={progress !== null && progress < 100}>Update profile
                                </button>
                            </figure>
                        </section>
                    </form>
                </>
            )}
        </section>
    )
}

export default AddEdit