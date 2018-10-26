import java.util.Scanner;

public class LottoClass {
	Scanner scan = new Scanner(System.in);	
	public static void main(String args[]){
		System.out.println("Please, Your lotto number.");
		Scanner scan = new Scanner(System.in);
		String str = scan.next();
		int[] array = new int[str.length()];
		for (int i = 0; i < str.length(); i++) {
		    array[i] = Integer.parseInt(String.valueOf(str.charAt(i))); 
		}
		int i=0;
		int cnt = 0;
		while (i< 3 ){
			int n;
			n = (int)(Math.random()*10);
			//System.out.println(n);
			if(array[i] == n) {
				cnt++;
			}
			i++;
		}
		switch(cnt) {
			case 1:
				System.out.println("$10000");
			break;
			case 2:
				System.out.println("$330000");
			break;
			case 3:
				System.out.println("$1000000");
			break;
			default:
				System.out.println("No matching number found.");
		}
	}
}