public class seasonsClass{
	public static void main(String[] args) {
		String[] array = { "Spring", "Summer", "Fall", "Winter" };
	    for (int i = 0; i < array.length; i++) {
	        if(array[i] == "Fall"){
	        	array[i] = "Autumn";
	        }
	        System.out.println(array[i]);
	    }
	}
}