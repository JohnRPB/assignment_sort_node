
public class QuickSort {

    /**
     * @param args the command line arguments
     */
    //public static void main(String[] args) {
        //Scanner sc = new Scanner(System.in);
        //String liststr = sc.next();
        //String[] items = liststr.split(",");
        //Integer[] list = new Integer[items.length];
        //for (int i = 0; i < list.length; i++) {
            //list[i] = Integer.parseInt(items[i]);
        //}
        //System.out.print("Before: ");
        //print(list);
        //QuickSort.sort(list);
        //System.out.print("After: ");
        //print(list);
    //}

    //private static void print(Integer[] list) {
        //System.out.print("[");
        //if (list.length > 0) System.out.print(list[0]);
        //for (int i = 1; i < list.length; i++) {
            //System.out.print("," + list[i]);
        //}
        //System.out.println("]");
    //}
    
    public QuickSort() {}
    
    private static <T extends Comparable <T>> int split(T[] list, int lo, int hi) {
        int left = lo + 1; // lo is the index of the pivot; the left pointer starts just after
        int right = hi; // right index starts at end of current list iteration
        T pivot = list[lo];
        
        while (true) { // cheap trick to run code UNTIL left is >= right
            // ---- Move right and left pointers
            // we can move left index while not past right
            while (left <= right) {
                if (list[left].compareTo(pivot) < 0) left++; else break; 
                // ".compareTo()" is actually the big reason we used Comparable <T>
                // If it has something smaller than what it's being called from, it returns -1; 
                // equal to, 0; and greater than, 1.
            }
            while (right > left) {
                if (list[right].compareTo(pivot) < 0) break; else right--;
            }
       
            // ----- Evaluate cases
            if (left >= right) break;
        
            // when both pointers have identified violations AND the left pivot
            // is not at or to the right of the right pivot (see above), swap
            // the left and right elements (into the correct arrays)
            T temp = list[left];
            list[left] = list[right];
            list[right] = temp;
            //advance each one step because the pointed elements have already
            //been compared to the pivot
            left++; right--;
        }
        
        // swap pivot with left-1 position
        list[lo] = list[left-1];
        list[left-1] = pivot;
        
        // return split point
        return left-1;
    }
    
    // Main sort method; stops immediately if 
    public static <T extends Comparable<T>> void sort(T[] list) {
        if (list.length <= 1) return;
        sort(list, 0, list.length-1);
    }
    
    // recursive sort method, obviously private. Recurses until recursed list has
    // fewer than two items
    private static <T extends Comparable <T>> void sort(T[] list, int lo, int hi) {
        if ((hi-lo) <= 0) return ; // recursed list contains fewer than 2 items
        int splitPoint = split(list, lo, hi); // finds new pivot
        sort(list, lo, splitPoint - 1); // left subarray recursion
        sort(list, splitPoint + 1, hi); // right subarray recursion
    }
    
}
