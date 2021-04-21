#include <stdio.h>

int main(void)
{
    int i;
    
    int sum = 0;
    for (i = 0; i <= 10000; i ++)
    {
        sum += i;
    }
    printf("1부터 10000까지의 합 : %d", sum);

    return (0);
}