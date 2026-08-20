package features.lambda;

/*
 함수형 인터페이스 
  인터페이스가 가질 수 있는 메서드가 딱 하나인 것을 의미
  람다식을 활용하기 위해서 

  Supliper : 매개변수 x, 반환타입 o
  Consumer : 매개변수 o, 반환타입 x
  Function : 매개변수 o, 반환타입 o
  Predicate : 매개변수 o, 반환타입으로 boolean

*/

@FunctionalInterface
public interface InspireFunction {
    public int max(int x, int y);

}
