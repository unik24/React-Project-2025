import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input/Input";
import Alert from "../../components/Alert/Alert";
import { UserIcon } from "../../components/Icons/UserIcon/UserIcon";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, updateUser } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [city, setCity] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.profile) {
      setFirstName(user.profile.firstName || "");
      setLastName(user.profile.lastName || "");
      setAge(user.profile.age || "");
      setFavoriteGenre(user.profile.favoriteGenre || "");
      setCity(user.profile.city || "");
      setProfilePicture(user.profile.profilePicture || "");
    }
  }, [user]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!firstName.trim()) {
      setError("First name cannot be empty.");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name cannot be empty.");
      return;
    }
    if (age && (isNaN(age) || age < 15 || age > 99)) {
      setError("Age must be a valid number between 15 and 99.");
      return;
    }

    const updatedProfile = {
      firstName,
      lastName,
      age: age ? Number(age) : "",
      favoriteGenre,
      city,
      profilePicture,
    };

    const updatedUser = { ...user, profile: updatedProfile };
    updateUser(updatedUser);

    setSuccessMessage("Profile saved successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  if (!user) {
    return (
      <p className={styles.notLoggedInMessage}>
        Please log in to view your profile.
      </p>
    );
  }

  return (
    <>
      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          onDismiss={() => setSuccessMessage("")}
        />
      )}
      {error && (
        <Alert message={error} type="error" onDismiss={() => setError("")} />
      )}

      <div className={styles.profileCard}>
        <div className={styles.profileImageSection}>
          {profilePicture ? (
            <img
              src={profilePicture}
              alt={`${firstName} ${lastName}`}
              className={styles.profileMainImage}
            />
          ) : (
            <div className={styles.profileMainIconPlaceholder}>
              <UserIcon size={100} color="#007bff" />
            </div>
          )}
          <h3 className={styles.profileName}>
            {firstName || "Movie Lover"} {lastName}
          </h3>
        </div>

        <form onSubmit={handleSaveProfile} className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name:</label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={setFirstName}
              placeholder="Your first name"
              className={styles.inputField}
              size="large"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={setLastName}
              placeholder="Your last name"
              className={styles.inputField}
              size="large"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="age">Age:</label>
            <Input
              type="number"
              id="age"
              value={age}
              onChange={setAge}
              placeholder="Your age"
              className={styles.inputField}
              size="large"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="favoriteGenre">Favorite Genre:</label>
            <select
              id="favoriteGenre"
              value={favoriteGenre}
              onChange={(e) => setFavoriteGenre(e.target.value)}
              className={styles.selectField}
            >
              <option value="">Select one</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Animation">Animation</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City:</label>
            <Input
              type="text"
              id="city"
              value={city}
              onChange={setCity}
              placeholder="Your city"
              className={styles.inputField}
              size="large"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="profilePicture">Profile Picture URL:</label>
            <Input
              type="text"
              id="profilePicture"
              value={profilePicture}
              onChange={setProfilePicture}
              placeholder="Paste your image URL here"
              className={styles.inputField}
              size="large"
            />
            {profilePicture && (
              <div className={styles.imagePreviewContainer}>
                <img
                  src={profilePicture}
                  alt="Profile"
                  className={styles.profileImagePreview}
                />
                <p className={styles.imagePreviewText}>Preview</p>
              </div>
            )}
          </div>
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};
