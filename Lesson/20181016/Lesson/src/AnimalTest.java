import java.util.Scanner;

class AnimalClass{
    public void sleep(String str){
        System.out.println(str);
    }
    public void eat(String str){
        System.out.println(str);
    }
}
class Fish extends AnimalClass{
	public String sleep = "They sleep in water";
	public String eat = "They eat plankton";
}
class Dog extends AnimalClass{
	public String sleep = "They sleep with their owner";
	public String eat = "They eat dog food";
}
class Cat extends AnimalClass{
	public String sleep = "They sleep on a couch";
	public String eat = "They eat fish";
}

public class AnimalTest extends AnimalClass{
    public static void main(String[] args){
        AnimalClass Animal = new AnimalClass();
        Fish Fish = new Fish();
        Dog Dog  = new Dog();
        Cat Cat = new Cat();
        
        String fSleep = Fish.sleep;
        String fEat = Fish.eat;
        Animal.sleep(fSleep);
        Animal.sleep(fEat);
 
        String dSleep = Dog.sleep;
        String dEat = Dog.eat;

        Animal.sleep(dSleep);
        Animal.sleep(dEat);
        
        String cSleep = Cat.sleep;
        String cEat = Cat.eat;
        Animal.sleep(cSleep);
        Animal.sleep(cEat); 
    }
}
