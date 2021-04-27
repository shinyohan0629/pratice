#include <stdio.h>

int main(void)
{
    int a = 1, b = 1, c = 1, d = 1;
    a = a + 1;
    printf("a : %d \n", a);
    printf("b : %d \n", b);
    ++c;
    printf("c : %d \n", c);
    d++;
    printf("d : %d \n", d);

    return 0;
}