class StudentClass{
	private String Name;
	private int Age;
	private String StudentID;
	private String Gender;
	
	//Getter
	//----------------------------------------------------------
	public String getName(){
		return Name;
	}
	public int getAge(){
		return Age;
	}
	public String getStudentID(){
		return StudentID;
	}
	public String getGender(){
		return Gender;
	}
	// Setter
	//----------------------------------------------------------
	public void setName(String newName){
		Name = newName;
	}
	public void setAge(int newAge){
		Age = newAge;
	}
	public void setStudentID(String newStudentID){
		StudentID = newStudentID;
	}
	public void setGender(String newGender){
		Gender = newGender;
	}
	
}
