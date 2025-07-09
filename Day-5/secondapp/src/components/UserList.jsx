const UserList = () => {
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Imran" },
  ];

  return (
    <div>
      <h1>User List</h1>

      <ul>
        {/* {users.length > 0 && users.map((user) => ( */}
        {users &&
          users.map((user) => (
            <li style={{ listStyle: "none" }} key={user.id}>
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
