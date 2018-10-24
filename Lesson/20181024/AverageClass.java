import java.util.Scanner;

public class AverageClass {
	public static void main(String args[]){
		System.out.println("Please, input subject.");
		Scanner scan = new Scanner(System.in);
		int count = Integer.parseInt(scan.next());
		int score[] = new int[count];
		int sum = 0;
		System.out.println("Please enter your score");
		for(int j = 0; j < count; j++) {
			score[j] = Integer.parseInt(scan.next());
			sum += score[j];
		}
		System.out.print( "Average of {");
		for(int j = 0; j < count; j++) {
			System.out.print(score[j]);
			if(j != (count-1)) {
				System.out.print(",");
			}
		}
		System.out.print("} = ");
		System.out.print(Math.round(sum / count));
	}
}