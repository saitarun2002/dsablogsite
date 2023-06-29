import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
        }}
      >
        Welcome to the DSA Blogger website!
      </h1>
      <p
        style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.5',
          marginBottom: '16px',
        }}
      >
        Our platform is designed to inspire and guide students on their journey through Data Structures and Algorithms (DSA). Here, you can explore and share your knowledge about various DSA topics, including the approaches you used to solve problems.
      </p>
      <p
        style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.5',
          marginBottom: '16px',
        }}
      >
        We believe that consistent coding practice is the key to mastering DSA. With our blogging feature, you can regularly update your progress, document the DSA topics you have learned, and share the techniques you used to tackle different problems. By sharing your insights, experiences, and code solutions, you'll not only motivate yourself but also inspire fellow students to stay committed to their DSA learning.
      </p>
      <p
        style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.5',
          marginBottom: '16px',
        }}
      >
        Whether you have just started your DSA journey or have advanced skills to share, the DSA Blogger website is the perfect platform for you. Join our community today and let's learn and grow together in the world of Data Structures and Algorithms!
      </p>
      <button
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#ff6b6b',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => navigate('/login')}
      >
        Join our community
      </button>
      <p>
        @Developed by SaiTarun
      </p>
    </div>
  );
}

export default About;
