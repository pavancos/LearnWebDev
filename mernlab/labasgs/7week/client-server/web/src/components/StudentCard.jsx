const StudentCard = ({student}) => {
  return (
    <div className={
        `flex flex-col rounded border-1 border-white p-2`
    }>
        <div className="w-[50px] h-[50px] flex justify-center align-center">
            <img className="rounded-full " src={student.avatar} alt={student.username.toString()} />
        </div>
        <div>
            <h1>{student.displayName}</h1>
            <h2>{student.username}</h2>
            <h3>{student.email}</h3>

        </div>

    </div>
  )
}
export default StudentCard