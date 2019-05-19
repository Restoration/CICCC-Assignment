public class  SubStudentClass extends StudentClass{
	public static void main(String[] args) {
		SubStudentClass ssc= new SubStudentClass();
        ssc.setName("Autumn Fall");
        ssc.setAge(25);
        ssc.setStudentID("CS180430");
        ssc.setGender("Male");
        System.out.println("Name:"+ssc.getName());
        System.out.println("Age:"+ssc.getAge());
        System.out.println("StudentID:"+ssc.getStudentID());
        System.out.println("Gender:"+ssc.getGender());    		
	}
}