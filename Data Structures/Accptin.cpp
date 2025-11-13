#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

struct Triplet
{
    int row;
    int column;
    int value;
};

int main()
{

    vector<Triplet> triplet;

    int count0 = 0;
    int countn = 0;
    int matrix[3][3];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << "Enter the elements of the matrix [" << i << "][" << j << "]: ";
            cin >> matrix[i][j];
        }
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] == 0)
            {
                count0++;
            }
            else
            {
                countn++;

                Triplet t;

                t.row = i;
                t.column = j;
                t.value = matrix[i][j];

                triplet.push_back(t);
            }
        }
    }

    if (count0 > countn)
    {
        cout << "\nIts a sparse matrix" << endl;
    }
    else
    {
        cout << "\nIt is NOT considered a sparse matrix" << endl;
    }

    cout << setw(5) << "Row" << " | " << setw(5) << "Col" << " | " << setw(5) << "Value" << endl;

    for (size_t i = 0; i < triplet.size(); i++)
    {

        cout << setw(5) << triplet[i].row
             << " | " << setw(5) << triplet[i].column
             << " | " << setw(5) << triplet[i].value << endl;
    }
    int n;
    cout << "Enter a value to be searched " << endl;
    cin >> n;
    for (size_t i = 0; i < triplet.size(); i++)
    {
        if (n == triplet[i].value)
        {
            cout << "Element found at " << "[" << triplet[i].column << "]" << "[" << triplet[i].row << "]" << endl;
        }
    }
    return 0;
}