#include<iostream>
using namespace std;
  struct Node{
        int data;
        Node* next;
};
int main(){
    Node* n1=new Node;
    Node* n2=new Node;
    Node* n3=new Node;
    n1->data=1;
    n2->data=2;
    n3->data=3;
    n1->next=n2;
    n2->next=n3;
    n3->next=NULL;
    Node* head=n1;
    head->data=1;
    Node* current=head;
    while(current!=NULL){
        cout<<current->data<<endl;
        current=current->next;
    }
    return 0;
}