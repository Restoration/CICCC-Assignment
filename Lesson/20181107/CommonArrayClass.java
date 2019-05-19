
public class CommonArrayClass {
    public static void main(String[] args) {
        Integer[] hoge = {1, 2, 5, 5, 8, 9, 7, 10, 12, 14};
        Integer[] foo = {1, 0, 6, 15, 6, 4, 7, 0, 12, 15};
        for(int i=0; i < hoge.length; i++){
            for(int k=0; k < foo.length; k++){
                if(hoge[i] == foo[k]){
                    System.out.println(hoge[i]);
                }
            }
        }
    }
}
