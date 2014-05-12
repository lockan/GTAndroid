import java.util.ArrayList;

public class CourseGrades {

    private String courseName;
    private int semester;
    private int year;
    public CourseMarkCategoryTally myTally;

    public CourseGrades(String courseName, int semester, int year) {
        this.courseName = courseName;
        this.semester = semester;
        this.year = year;
        myTally = new CourseMarkCategoryTally();
    }
    public float tallyMarks() {
        float weights;
        return myTally.tallyMarks();
    }
    public String getName() {
        return courseName;
    }
    public boolean addMarkInstance(String categoryName, 
                                   String name, 
                                   float actual, 
                                   float possible) {
        boolean output = false;
       // System.out.println("Your category is " + getMarkCategory(categoryName));        
        getMarkCategory(categoryName).addMarkInstance(name, actual, possible);
        return output;
    }
    
    public void addMarkCategory(String categoryName, float weight) {
         myTally.addCategory(categoryName, weight);
    }
    public MarkCategory getMarkCategory(String categoryName) {
        MarkCategory output;
        int idx = myTally.categoryIdx(categoryName);
        output = (idx >= 0)? myTally.getCategoryAt(idx): null;
        
        return output;
    }
    

    
    public static void main(String[] foo) {
        CourseGrades myMathGrades = new CourseGrades("COMP 1113", 2014, 1);
        myMathGrades.addMarkCategory("Quizzes", 15);
        
        myMathGrades.addMarkCategory("Assignment 1", 10);
        myMathGrades.addMarkCategory("Assignment 2", 15);
        myMathGrades.addMarkCategory("Assignment 3", 25);
        myMathGrades.addMarkCategory("Midterm", 25);
        myMathGrades.addMarkCategory("Final", 25);
        
        System.out.println("Marks distribution for " + myMathGrades.getName() + 
                " is as follows:");
        System.out.println(myMathGrades.myTally); 

        // Got 4 out of 5 on quiz 1
        myMathGrades.addMarkInstance("Quizzes", "Quiz 1", 4, 5);
        // Got 5 out of 5 on quiz 2
        myMathGrades.addMarkInstance("Quizzes", "Quiz 2", 5, 5); 
        myMathGrades.addMarkInstance("Assignment 1", "Assignment 1", 25, 35); 
        
        System.out.println("Your total so far is " + myMathGrades.tallyMarks() + "%.");

    }
    
    class CourseMarkCategoryTally {
        private ArrayList<MarkCategory> myMarkCategories;
        
        public CourseMarkCategoryTally() {
            myMarkCategories = new ArrayList<MarkCategory>();
        }
        public boolean addCategory(String categoryName, float weight) {
            boolean output = false;
            if (categoryIdx(categoryName) < 0) {
                MarkCategory c = new MarkCategory(categoryName, weight);
                myMarkCategories.add(c);
                output = true;
            }
            
            return output;
        } 
        
        public MarkCategory getCategoryAt(int idx) {
            MarkCategory output;
            output = (idx >= 0 && idx < myMarkCategories.size())? 
                    myMarkCategories.get(idx): null;
                    
            return output;
        }
        public MarkCategory getCategory(String name) {
            MarkCategory output;
            int idx = categoryIdx(name);
            output = getCategoryAt(idx);
            return output;
        }
        public float tallyMarks() {
            float sum = 0;
            float weightSum = 0;
            for (MarkCategory myCat: myMarkCategories) {
                if(!myCat.getMarkInstances().isEmpty()) {
                    weightSum += myCat.getWeight();
                }
            }
            for (MarkCategory myCat: myMarkCategories) {
                sum += (myCat.getTotal() * myCat.getWeight() / weightSum);
            }
            return sum;
        }
        
        public int categoryIdx(String name) {
            int output = -1;
            for (MarkCategory myCat: myMarkCategories) {
                if (myCat.getCategoryName().equals(name)) {
                    output = myMarkCategories.indexOf(myCat);
                }
            }
            
            return output;
        }
        public String toString() {
            String output = "";
            for (MarkCategory myCat: myMarkCategories) {
                output += myCat + "\n";
            }
            
            return output;
        }
    }
    
    class MarkCategory {
        private String categoryName;
        private float weight;
        private ArrayList<MarkInstance> myMarkInstances;
        
        public MarkCategory(String name, float w) {
            categoryName = name;
            weight = w;
            myMarkInstances = new ArrayList<MarkInstance>();
        }
        public ArrayList<MarkInstance> getMarkInstances() {
            return myMarkInstances;
        }
        public String getCategoryName() {
            return categoryName;
        }
        public float getWeight() {
            return weight;
        }
        public String toString() {
            String output = categoryName + ": " + weight +"%";
            return output;
        }
        
        public float getTotal() {
          //  System.out.println("Getting total for " + categoryName);
            float total = 0;
            
            for (MarkInstance m: myMarkInstances) {
                total += m.getPercentage();
            }
            
            if (myMarkInstances.size() > 0) {
                total/= myMarkInstances.size();
            }
            
            return total;
        }
        
        public void addMarkInstance(String name, float poss, float actual) {
            int idx = haveMarkInstance(name);
            if ( idx >= 0) {
                myMarkInstances.get(idx).setActualMark(actual);
            } else {
                MarkInstance m = new MarkInstance(name, poss, actual);
                System.out.println("Adding " + m);
                myMarkInstances.add(m);
                
             /*  for (MarkInstance mi: myMarkInstances) {
                    System.out.println(mi);
                } */
            }
        }
        public boolean updateMarkInstance(String name, float actualMark) {
            boolean output = true;
            int idx = haveMarkInstance(name);
            if (idx > 0) {
                myMarkInstances.get(idx).setActualMark(actualMark);
            } else {
                output = false;
            }
            
            return output;
            
        }
        public int haveMarkInstance(String name) {
            int output = -1;
            for (MarkInstance m: myMarkInstances) {
                if (name.equals(m.getName())) {
                    output = myMarkInstances.indexOf(m);
                }
            }
            
            return output;
        }
    }
    
    class MarkInstance {
        private String name;
        private float possibleMark;
        private float actualMark;

        public MarkInstance(String n, float a, float p) {
            name = n;
            possibleMark = p;
            actualMark = a;
        }
        public String toString() {
            return "" + name + ": " + actualMark + "/" + possibleMark + " = " +
                   getPercentage() + "%";
        }
        
        public float getPossibleMark() {
            return possibleMark;
        }
        public void setPossibleMark(float possibleMark) {
            this.possibleMark = possibleMark;
        }
        public float getActualMark() {
            return actualMark;
        }
        public void setName(String name) {
            this.name = name;
        }

        public float getPercentage() {
            return 100 * actualMark / possibleMark;
        }

        public String getName() {
            return name;
        }
        public void setActualMark(float f) {
            actualMark = f;
        }
    }
    
}
    
    
