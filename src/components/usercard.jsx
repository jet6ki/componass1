function UserCard() {
    const user = {
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "123-456-7890",
        address: "1234 Main St",
        profilePhoto: "https://www.portotheme.com/wordpress/porto/elementor/business-consulting3/wp-content/uploads/sites/82/2021/02/team-5.jpg"
    };

    return (
        <div style={{
            maxWidth: '400px',
            margin: '50px auto',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(0,0,0,0.2))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
            padding: '25px',
            textAlign: 'center',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            transform: 'scale(1)',
            hover: {
                transform: 'scale(1.05)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
            }
        }}>
            <img 
                src={user.profilePhoto} 
                alt="Profile" 
                style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    border: '5px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                    hover: {
                        transform: 'rotate(5deg)'
                    }
                }}
            />
            <h2 style={{ fontSize: '24px', marginTop: '15px', fontWeight: 'bold', letterSpacing: '1px' }}>{user.name}</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '8px 0', fontSize: '14px' }}>{user.email}</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '8px 0', fontSize: '14px' }}>{user.phone}</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '8px 0', fontSize: '14px' }}>{user.address}</p>
        </div>
    );
}

export default UserCard;
