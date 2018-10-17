class StudentClass{
	protected String Name = "Autumn Fall";
	protected String Age = "25";
	protected String StudentID = "CS180430";
	protected String Gender = "Male";
}

public class  SubStudentClass extends StudentClass{
	public static void main(String[] args) {	    
		SubStudentClass ssc= new SubStudentClass();
        System.out.println(ssc.Name);
        System.out.println(ssc.Age);
        System.out.println(ssc.StudentID);
        System.out.println(ssc.Gender);
	}
}