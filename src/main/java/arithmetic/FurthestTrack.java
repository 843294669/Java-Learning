package arithmetic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 题目描述：
 * 某探险队负责对地下洞穴进行探险。 探险队成员在进行探险任务时，随身携带的记录器会不定期地记录自身的坐标，
 * 但在记录的间隙中也会记录其他数据。 探索工作结束后，探险队需要获取到某成员在探险过程中相对于探险队总部的最远的足迹位置。
 *
 * 仪器记录坐标时，坐标的数据格式为(x,y)，如(1,2)、(100,200)，其中0<x<1000，0<y<1000。
 * 同时存在非法坐标，如(01,1)、(1,01)，(0,100)属于非法坐标。 设定探险队总部的坐标为(0,0)，
 * 某位置相对总部的距离为：x * x  y * y。 若两个座标的相对总部的距离相同，则第一次到达的坐标为最远的足迹。
 *
 * 若记录仪中的坐标都不合法，输出总部坐标（0,0）。 备注：不需要考虑双层括号嵌套的情况，比如sfsdfsd((1,2))。
 *
 * 输入描述: 字符串，表示记录仪中的数据。  如：ferga13fdsf3(100,200)f2r3rfasf(300,400)
 * 输出描述：字符串，表示最远足迹到达的坐标。  如： (300,400)
 */
public class FurthestTrack {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String str = null;
        while ((str = bf.readLine()) != null) {
            int x = 0, y = 0, sum = 0;
            for (int i = 0; i < str.length(); i++) {
                if (str.charAt(i) == '(') {
                    int j = i + 1;
                    while (str.charAt(j) != ')') {
                        j++;
                    }
                    String[] xy = str.substring(i+1, j).split(",");
                    int m = Integer.parseInt(xy[0]);
                    int n = Integer.parseInt(xy[1]);
                    int o = m*m + n*n;
                    if (sum < o) {
                        sum = o;
                        x = m;
                        y = n;
                    }
                }
            }
            System.out.println("("+x+","+y+")");
        }
    }

}
