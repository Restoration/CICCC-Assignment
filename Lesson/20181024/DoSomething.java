import java.util.ArrayList;

class DoSomething {
  String text;
  DoSomething(){
      this.text = "final String BLANK";
  }
  void setName(String _text){
      this.text = _text;
  }

  void removeSpace(String text){
	 int count = text.length() - text.replace(' ' + "", "").length();
	 int j =  text.indexOf(" ",-1);
	 String tmp = text.substring(0,j);
	 System.out.print(tmp);
	 for(int i=0; i < count; i++) {	 
		 tmp = text.substring(text.indexOf(tmp) +1 + tmp.length() );
		 int k =  tmp.indexOf(" ",-1);
		 if(k == -1) {
			 tmp = tmp.substring(0,tmp.length());
			 System.out.print(tmp);
			 break;
		 }
		 tmp = tmp.substring(0,k);
		 System.out.print(tmp);
	 } 
  }
}