import java.util.Scanner;
public class DoSomethingMain extends DoSomething{
	public static void main(String args[]){
		System.out.println("Tell me a string that has a decent length with some spaces inside.");
        DoSomething ds = new DoSomething();
		Scanner scan = new Scanner(System.in);
		String text = scan.nextLine();
		ds.removeSpace(text);
	}
}