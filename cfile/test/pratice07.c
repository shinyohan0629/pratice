#include <stdio.h>
int main()
{
    int i, j;

    printf("크기를 비교할 두 수를 입력해 주세요 : ");
    scanf("%d %d", &i, &j);
    if (i > j)
    {
        printf("%d 는 %d 보다 큽니다. \n", i, j);
    }
    if (i < j)
    {
        printf("%d 는 %d 보다 작습니다. \n", i, j);
    }
    if (i >= j)
    {
        printf("%d 는 %d보다 크거나 같습니다. \n", i, j);
    }
    if( i <= j)
    {
        printf("%d 는 %d보다 작거나 같습니다. \n", i, j);
    }
    if (i == j)
    {
        printf("%d 는 %d와 같습니다. \n", i ,j);
    }
    if (i != j)
    {
        printf("%d 는 %d와(과) 다릅니다. \n", i, j);
    }
    return 0;
}