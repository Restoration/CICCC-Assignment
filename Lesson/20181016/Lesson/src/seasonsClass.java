import java.util. ArrayList;
public class seasonsClass{
	public static void main(String[] args) {
		ArrayList <String> season = new ArrayList <String>() {{
			add("Spring");
			add("Summer");
			add("Fall");
			add("Winter");			
		}};

		System.out.println(season);
		season.set(2,"Autumn");
		System.out.println(season);
	}
}