import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) {
            arr[i] = sc.nextInt();
        }
        int sum = sc.nextInt();
        if(sumExistOrNot(n, arr, sum)) {
            System.out.println("yes");
        }
        else {
            System.out.println("no");
        }
    }
    
    public static boolean sumExistOrNot(int n, int[] arr, int sum) {
        if(sum==0) {
            return true;
        }
        
        if(n==0 && sum!=0) {
            return false;
        }
        
        if(arr[n-1]>sum) {
            return sumExistOrNot(n-1, arr, sum);
        }
        
        return sumExistOrNot(n-1, arr, sum) || sumExistOrNot(n-1, arr, sum-arr[n-1]);
    }
}