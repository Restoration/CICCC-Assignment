public class ArrayClass{
    public static void main(String[] argas){ 
        int array[][] = {{1, 2, 3, 4, 5},{6,7,8,9,10},{11,12,13,14,15}};
        for (int[] k: array) {
            for (int elem: k) {
            	if(elem % 5 == 0) {
            		System.out.println(elem);
            	} else {
            		System.out.print(elem);
            		System.out.print(',');
            	}
            }        	
        }
    }
}
