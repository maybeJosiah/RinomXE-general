/*
5/6/2025, 3:48PM, Start translating from Ruby to Javascript. 3:49PM, X E.
4:11PM, like done, begin tests. X E.
4:16PM, done and tested. X E.
4:31PM, done. X E. 5/13/2025, 4:03PM, done. X E.
*/
/*
=begin
5/1/2025, 1:54PM, begin making simpler version. X E.
2:27PM, begin tests. X E. 2:43PM, like done. X E.
2:47PM, begin making z version. X E. 3:48PM, done. X E.
3:51PM, done. X E.
=end
=begin
8/9/2023, 1:11PM, 1:12PM, start translating from Javascript to Ruby.
By Norvel M. IV, Josiah,
on Ubuntu Touch using uText.
1:13PM, X E.
3:04PM, like done, X E. 3:05PM, X E.
1/2/2024, 12:46PM, like done. Begin compiler tests and fixes. X E.
12:57PM, like done. X E.
3/12/2024, 7:05PM, like done, begin compiler tests. X E. 7:07PM, fixed one thing, --. X E.
3/14/2024, 4:32PM, done. X E.
3/15/2024, 5:52PM, done. X E.
6/19/2024, 1:40PM, start replacing abs. X E. 1:41PM, done. X E.
2:06PM, break. X E. 2:39PM, start work again. 3:26PM, break. X E.
7/11/2024, 1:05PM, done except untested line and point stuff in draw order but syntactically correct.
1:06PM, X E. 7:10PM, fixes, like done. X E.
7/12/2024, 10:26AM, like done, X E.
7/18/2024, 2:54PM, done. X E.
7/19/2024, 6:31PM, like done and tested, used 1.0e-7 pad for setDrawOrder. X E. 6:32PM, X E.
7/23/2024, 1:07PM, done. X E. 6:08PM, done. X E.
7/26/2024, 1:22PM, like done. X E. 3:27PM, like done. X E.
7/30/2024, 2:03PM, like broke. X E. 5:51PM, some fixes near now. X E.
8/1/2024, 4:36PM, like done. X E.
8/2/2024, 5:34PM, like done. X E. 5:38PM, like done. X E. 5:41PM, like done. X E.
5:48PM, like done. X E. 6:03PM, like done. X E. 7:05PM, like done. X E.
7:09PM, like done. X E. 8/8/2024, 8:31PM, like done. X E.
8/9/2024, 8:41PM, like done. 8:41PM, X E.
9:16PM, broken. 9:21PM, like done. X E.
9/24/2024, 7:48PM, like done. X E.
9/27/2024, 1:54PM, 1:55PM, like done and ready to publish. X E.
10/3/2024, 5:32PM, start commenting. 5:58PM, done and did some other stuff. X E.
10/17/2024, 3:33PM, begin fixing minor bugs.
3:34PM, like done. X E. 3:41PM, done. X E.
10/24/2024, 2:55PM, begin fixing.
2:56PM, done. X E.
12/17/2024, 5:43PM, start work. X E.
12/18/2024, 1:41PM, done. X E.
12/24/2024, 11:53AM, done. X E.
1/7/2025, 4:40PM, done. X E.
4:56PM, done. X E.
=end
=begin
*/
/*
8/3/2023, 3:50PM, start translating from Swift to
Javascript.
By Norvel M. IV, Josiah.
On Ubuntu Touch using uText.
3:52PM, X E. 4:41PM, like done, X E.
*/
/*
7/26/2023, 12:32PM, start.
Started by Norvel M. IV, Josiah.
Started on Ubuntu Touch using uText.
I define "X E" and "XE" ending things to mean:
"All that is near and with this me and since like my last adequate uncertainty to this me as per one might be input maybe or might not be input maybe or might be output maybe or might not be output maybe, maybe or maybe not, maybe.".
In a sentence, "A" may be lower case and if a period is after "X E" then period may be omitted from that definition.
This Sinom is intended to allow drawing in 3 or more dimensions using dimension axes on a 2 dimensional screen.
Sinom is like just math for this.
SinomMathXE contains static functions like for math.
SinomDrawXE should be an interface to do math for drawing on a 2 dimensional screen using 3 or more dimensions.
12:41PM, X E.
6:19PM, like done, X E.
8/1/2023, 10:45AM, like done, X E. 11:01AM, like done, X E.
11:07AM, like done, X E. 11:10AM, like done, X E.
11:15AM, like done, X E. 6:01PM, like done, X E.
6:17PM, like done, X E.
*/
/*
//7/26/2023, 12:41PM, start adding import. 12:42PM, done.
//import Darwin
//7/26/2023, 12:42PM, start. 2:48PM, done, X E.
=end
*/
//This is mainly a utility class for functions.
class RinomMathXE {
    //This function returns whether things are like equal with conditions like rounding or in range.
    //8/9/2023, 1:23PM, done getDistance.
    ////8/3/2023, 3:54PM, done getDistance.
    ////7/26/2023, 12:51PM, start. 1:01PM, done.
    static precisionEquals(number, compareTo, roundWith=1.0, shouldRound=false, precPad=0.0) {
        //Checks, if it can then return true but false if all fails.
        if (number==compareTo) {
            //X E
            return true;
            //X E
        } else if (shouldRound) {
            //7/23/2024, 12:56PM, start fix. 12:57PM, done. 1:00PM, continued. done. X E.
            //1:07PM, better all now. X E.
            if (Math.round(number*roundWith)/roundWith==Math.round(compareTo*roundWith)/roundWith) {
                //X E
                return true;
                //X E
            } else if (Math.round(number*roundWith)/roundWith==compareTo) {
                //X E
                return true;
                //X E
            }
        }
        if (precPad != 0.0) {
            //X E
            return (compareTo >= number-precPad && compareTo <= number+precPad) || (number >= compareTo-precPad && number <= compareTo+precPad);
            //X E
        }
        //X E
        return false;
        //X E.
    }
    //X E
    //5/6/2025, 3:54PM, done precisionEquals.
    //This function takes all but last 2 as constants and uses last 2 as dynamic for reusage.
    //It takes a 3d+ point and puts it in 2d on view plane.
    //8/9/2023, 1:31PM, done precisionEquals.
    //8/3/2023, 3:56PM, done precisionEquals.
    //7/26/2023, 1:01PM, 1:02PM, start. 1:31PM, done, X E. 1:36PM, fix. 5:08PM, fix.
    static to2dPoint(point, viewPoint, viewAtPoint, xyz, numbers, roundWith=1.0, shouldRound=false,precPad=0.0, index=0) {
        //8/1/2023, 10:44AM, 10:45AM, fixes.
        //6/19/2024, 1:46PM, start fixes. 2;39PM, resume work.
        //x=x0+(x1-x0)t
        //finding t: (x-x0)/(x1-x0)=t
        if (Math.abs(numbers[2])>Math.abs(point[xyz[2]]-viewPoint[xyz[2]])) {
            //Too close, X E.
            return null;
            //X E
        } else if ((numbers[2] >= -0.0) != (point[xyz[2]]-viewPoint[xyz[2]] >= -0.0)) {
            //Wrong way, X E.
            return null;
            //X E
        }
        //7/2/2024, 10:52AM, start work. 11:23AM, done.
        //x=x0+(ex-x0)*t
        //find t?
        //we have a second x, viewAtPoint, use it.
        //(x-x0)/(ex-x0)=t
        //Check for in view plane.
        index = point.length-1;
        while ((index==xyz[0]||index==xyz[1]||index==xyz[2])&&index != -1) {
            index-=1;
        }
        while (index != -1) {
            if (!RinomMathXE.precisionEquals(viewPoint[index]+(point[index]-viewPoint[index])*numbers[2]/(point[xyz[2]]-viewPoint[xyz[2]]),viewAtPoint[index],roundWith,shouldRound,precPad)) {
                //Not to view plane, X E.
                return null;
                //X E
            }
            index-=1;
            while ((index==xyz[0]||index==xyz[1]||index==xyz[2])&&index != -1) {
                index-=1;
            }
        }
        //To view plane, return x and y, X E.
        return [numbers[0]+(point[xyz[0]]-viewPoint[xyz[0]])*numbers[2]/(point[xyz[2]]-viewPoint[xyz[2]]), numbers[1]+(point[xyz[1]]-viewPoint[xyz[1]])*numbers[2]/(point[xyz[2]]-viewPoint[xyz[2]])];
        //X E
    }
    //X E
    //5/6/2025, 3:57PM, done to2dPoint.
    //5/1/2025, 2:56PM, start. 2:59PM, done. 3:01PM, done.
    static compare(zd,zd1) {
        if (zd[0]<zd1[0]) {
            //X E
            return true;
            //X E
        } else if (zd[0]>zd1[0]) {
            //X E
            return false;
            //X E
        }
        //X E
        return zd[1]<=zd1[1];
        //X E
    }
    //X E
    //5/6/2025, 3:57PM, done compare.
    //5/1/2025, 1:58PM, start. 2:10PM, done. 2:56PM, done again.
    static shapeDistance(viewPoint,points,points2d,indices,z,indexer=new Array(2).fill(0),numbers=new Array(2).fill(0.0)) {
        if (indices.length==0) {
            //X E
            return [-2.0,-1.0];
            //X E
        }
        indexer[0]=indices.length-1;
        numbers[0]=0.0;
        numbers[1]=0.0;
        while (indexer[0] != -1) {
            if (points2d[indices[indexer[0]]]==null) {
                //X E
                return [-1.0,-1.0];
                //X E
            }
            numbers[0]+=points[indices[indexer[0]]][z]-viewPoint[z];
            numbers[1]+=Math.sqrt(points2d[indices[indexer[0]]][0]*points2d[indices[indexer[0]]][0]+points2d[indices[indexer[0]]][1]*points2d[indices[indexer[0]]][1]);
            indexer[0]-=1;
        }
        //X E
        return [Math.abs(numbers[0])/indices.length,numbers[1]/indices.length];
        //X E
    }
    //X E
}
//X E
//5/6/2025, 4:00PM, done RinomMathXE.
//8/9/2023, 2:08PM, done RinomMathXE. 2:09PM.
//8/3/2023, 4:14PM, done RinomMathXE.
//StinomDrawXE is a main class for using Stinom.
//7/26/2023, 2:53PM, start. 6:18PM, done, X E.
class RinomDrawXE {
    //7/19/2024, 6:17PM, start making variables on this not each time. 6:18PM, X E.
    //7/26/2023, 2:54PM, start variables. 8/1/2023, 6:00PM, start fixes. 6:01PM, done.
    points;
    points2d;
    shapes;
    drawOrder;
    shapeIndex;
    pointIndex;
    xyz;
    viewPoint;
    viewAtPoint;
    dists;
    index;
    funcIndex;
    indices;
    indices1;
    numbers;
    //7/26/2023, 2:57PM, done variables, X E. 2:59PM, added dimens, X E. 3:00PM, added view points, X E.
    //8/3/2023, 4:16PM, done variable.
    //8/9/2023, 2:13PM, done variables.
    //Make an instance, all things have an affect.
    //7/26/2023, 2:58PM, start. 3:10PM, done.
    constructor(viewPoint, viewAtDimens, x=0, y=1, z=2, pointCapacity=0, shapeCapacity=0) {
        this.viewPoint=viewPoint;
        this.viewAtPoint=viewAtDimens;
        this.xyz=[x,y,z];
        //8/1/2023, 6:16PM, fix.
        this.drawOrder=new Array(shapeCapacity).fill(0);
        this.points=new Array(pointCapacity);
        this.points2d=new Array(pointCapacity);
        this.shapes=new Array(shapeCapacity);
        this.shapeIndex=0;
        this.pointIndex=0;
        //X E
    }
    //X E
    //5/6/2025, 4:03PM, done to this.
    //reset so you can begin inputs again.
    //7/2/2024, 11:36AM, 11:37AM, start. 11:37AM, done.
    reset() {
        this.pointIndex=0;
        this.shapeIndex=0;
        //X E
    }
    //X E
    //8/9/2023, 2:20PM, done initialize.
    //8/3/2023, 4:20PM,done constructor. 4:21PM.
    //Add a 3d+ point.
    //7/26/2023, 4:45PM, start. 4:49PM, done. 4:50PM, fix.
    addPoint(point) {
        if (this.points.length==this.pointIndex) {
            this.points.push(point);
        } else {
            this.points[this.pointIndex]=point;
        }
        this.pointIndex+=1;
        //X E
    }
    //X E
    //8/9/2023, 2:24PM, done addPoint.
    //8/3/2023, 4:22PM, done addPoint. 4:23PM, fix to it.
    //Add a shape made of indices of points as input.
    //7/26/2023, 4:49PM, start.    4:51PM, done, X E.
    addShape(shape) {
        if (this.shapes.length==this.shapeIndex) {
            this.shapes.push(shape);
        } else {
            this.shapes[this.shapeIndex]=shape;
        }
        this.shapeIndex+=1;
        //X E
    }
    //X E
    //8/9/2023, 2:27PM, done addShape.
    //8/3/2023, 4:24PM, done addShape.
    //Set 2d point values based on 3d+ point values.
    //7/26/2023, 4:52PM, start. 5:07PM, done. 5:14PM, fix.
    set2dPoints(roundWith=1.0,shouldRound=false,precPad=0.0) {
        //First make points2d correct length.
        if (this.pointIndex>this.points2d.length) {
            this.points2d=new Array(this.pointIndex);
        }
        //Next initialize variables.
        this.index=this.pointIndex-1;
        this.funcIndex=0;
        this.numbers=[this.viewPoint[this.xyz[0]]-this.viewAtPoint[this.xyz[0]],this.viewPoint[this.xyz[1]]-this.viewAtPoint[this.xyz[1]],this.viewAtPoint[this.xyz[2]]-this.viewPoint[this.xyz[2]]];
        //Set 2d points.
        while (this.index != -1) {
            this.points2d[this.index]=RinomMathXE.to2dPoint(this.points[this.index],this.viewPoint,this.viewAtPoint,this.xyz,this.numbers,roundWith,shouldRound,precPad,this.funcIndex);
            this.index-=1;
        }
        //X E
    }
    //X E
    //Offset 2d points by a value set.
    //3/12/2024, 7:00PM, start. 7:02PM, done and fixed set2dPoints. X E.
    offset(offsets=[0.0,0.0]) {
        this.index=this.pointIndex-1;
        while (this.index != -1) {
            if (this.points2d[this.index] != null) {
                this.points2d[this.index][0]+=offsets[0];
                this.points2d[this.index][1]+=offsets[1];
            }
            this.index-=1;
        }
        //X E
    }
    //X E
    //12/17/2024, 7:03PM, start. 7:04PM, done.
    reverseX() {
        this.index=this.pointIndex-1;
        while (this.index != -1) {
            if (this.points2d[this.index] != null) {
                this.points2d[this.index][0] = -this.points2d[this.index][0];
            }
            this.index-=1;
        }
        //X E
    }
    //X E
    //12/17/2024, 7:04PM, start. 7:05PM, done. 7:07PM, done. X E.
    reverseY() {
        this.index=this.pointIndex-1;
        while (this.index != -1) {
            if (this.points2d[this.index] != null) {
                this.points2d[this.index][1] = -this.points2d[this.index][1];
            }
            this.index-=1;
        }
        //X E
    }
    //X E
    //8/9/2023, 2:33PM, done set2dPoints. 2:34PM.
    //8/3/2023, 4:29PM, done set2dPoints.
    //Set draw order of all shapes.
    //7/26/2023, 5:09PM, start. 6:18PM, done, X E. 3/12/2024, 6:52PM, start fixes. 7:00PM, done.
    setDrawOrder() {
        //5/1/2025, 2:07PM, start revamp.
        //Check if nothing to order.
        if (this.shapeIndex<2) {
            //X E
            return;
            //X E
        }
        //First make draw order correct size.
        if (this.drawOrder.length<this.shapeIndex) {
            this.drawOrder=new Array(this.shapeIndex).fill(-1);
        }
        if (this.dists==undefined) {
            this.dists=new Array(this.shapeIndex).fill([-3.0,-3.0]);
        } else if (this.dists.length<this.shapeIndex) {
            this.dists=new Array(this.shapeIndex).fill([-3.0,-3.0]);
        }
        //First initialize some variables.
        if (this.numbers==undefined) {
            this.numbers=new Array(2).fill(0.0);
        }
        if (this.indices1==undefined) {
            this.indices1=new Array(2).fill(0);
        }
        this.indices=[this.shapeIndex-1,0,0,2];
        this.dists[this.indices[0]]=RinomMathXE.shapeDistance(this.viewPoint,this.points,this.points2d,this.shapes[this.indices[0]],this.xyz[2],this.indices1,this.numbers);
        this.dists[this.indices[0]-1]=RinomMathXE.shapeDistance(this.viewPoint,this.points,this.points2d,this.shapes[this.indices[0]-1],this.xyz[2],this.indices1,this.numbers);
        //initial compare.
        if (RinomMathXE.compare(this.dists[this.indices[0]],this.dists[this.indices[0]-1])) {
            this.drawOrder[0]=this.indices[0];
            this.drawOrder[1]=this.indices[0]-1;
        } else {
            this.drawOrder[0]=this.indices[0]-1;
            this.drawOrder[1]=this.indices[0];
        }
        //Prepare and do rest. This is basically binary sort with input to already sorted.
        this.indices[0]-=2;
        while (this.indices[0] != -1) {
            this.dists[this.indices[0]]=RinomMathXE.shapeDistance(this.viewPoint,this.points,this.points2d,this.shapes[this.indices[0]],this.xyz[2],this.indices1,this.numbers);
            //Set up bounds.
            this.indices[1]=0;
            this.indices[2]=this.indices[3]-1;
            while (this.indices[1] != this.indices[2]) {
                //Compare.
                if (RinomMathXE.compare(this.dists[this.indices[0]],this.dists[this.drawOrder[Math.round((this.indices[1]+this.indices[2])/2.0)]])) {
                    //Move upper bound down if after
                    if (this.indices[1]+1==this.indices[2]) {
                        this.indices[2]=this.indices[1];
                    } else {
                        this.indices[2]=Math.ceil((this.indices[1]+this.indices[2])/2.0);
                    }
                } else {
                    //Move lower bound up if before
                    if (this.indices[1]+1==this.indices[2]) {
                        this.indices[1]=this.indices[2];
                    } else {
                        this.indices[1]=Math.floor((this.indices[1]+this.indices[2])/2.0);
                    }
                }
            }
            //Compare with found index.
            if (RinomMathXE.compare(this.dists[this.indices[0]],this.dists[this.drawOrder[this.indices[1]]])) {
                //If before then rank as such
                this.indices[2]=this.indices[1];
            } else {
                this.indices[2]=this.indices[1]+1;
            }
            //Move all at or above found up one.
            this.indices[1]=this.indices[3];
            while (this.indices[1] != this.indices[2]) {
                this.drawOrder[this.indices[1]]=this.drawOrder[this.indices[1]-1];
                this.indices[1]-=1;
            }
            this.drawOrder[this.indices[2]]=this.indices[0];
            this.indices[0]-=1;
            this.indices[3]+=1;
        }
        //X E
    }
    //X E
}
//X E
//8/3/2023, 4:40PM, done SinomDrawXE.
//8/9/2023, 3:03PM, done SinomDrawXE.
//5/6/2025, 4:11PM, done RinomDrawXE.
