package leetcode;

import java.util.Arrays;

public class TwoSum {
    public int[] solution(int[] nums,int target){
        int[] result = new int[2];
        for(int i = 0;i<nums.length;i++){
            for(int j = i;j<nums.length-1;j++){
                if(nums[i]+nums[j+1] == target){
                    result[0] = i;
                    result[1] = j+1;
                    break;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        TwoSum t = new TwoSum();
        int[] i = {3,2,4};
        System.out.println(Arrays.toString(t.solution(i,6)));
    }
}
