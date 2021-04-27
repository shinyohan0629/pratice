#include <stdio.h>
//break 문
int main(void)
{
    int ursanswer;

    printf("컴퓨터가 생각한 숫자를 맞춰라 \n");

    for (;;)
    {
        scanf("%d", &ursanswer);
        if ( ursanswer == 3)
        {
            printf ("맞추셨군요! \n");
            break;
        }
            else
            {
                printf("틀렸습니다! \n");
            }
    }
    return (0);
}