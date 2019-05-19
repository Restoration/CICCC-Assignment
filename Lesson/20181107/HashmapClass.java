import java.util.HashMap;
import java.util.Map;

public class HashmapClass {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(98762, "Steve Jackson");
        map.put(96754, "Miles Murden");
        map.put(92345, "Daren Deland");
        map.put(99998, "Stephen Stander");
        map.put(91235, "Mitchell Major");
        map.put(98745, "Nestor Nicely");
        map.put(96534, "Autumn Fall");
        map.put(90987, "Lazaro Layden");
        for (Map.Entry me : map.entrySet()) {
          System.out.println("Key: "+me.getKey() + " & Value: " + me.getValue());
        }

        System.out.println("--------------------------------------------------");
        map.put(90666 , "Larry King");
        for (Map.Entry me : map.entrySet()) {
          System.out.println("Key: "+me.getKey() + " & Value: " + me.getValue());
        }

    }
}
