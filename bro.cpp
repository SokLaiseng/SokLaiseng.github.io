#include<iostream>
using namespace std;
    int n1,n2;
    char op;
int main(){
    cout<<">>>>>>>>>>>>>[C][A][L][C][U][L][A][T][O][R]<<<<<<<<<<<<<<\n";
    cout<<"Number1:";cin>>n1;
    cout<<"+\n-\n*\n/\n";
    cout<<"Choose the option:";
    cin>>op;
    cout<<"Number2:";cin>>n2;
    switch(op){
      case '+':
      cout<<"Result:"<<n1+n2;
      break;  
      case '-':
       cout<<"Result:"<<n1-n2;
      break;  
      case '*':
       cout<<"Result:"<<n1*n2;
      break;  
      case '/':
       cout<<"Result:"<<n1/n2;
      break; 
    }
    
    return 0;
}