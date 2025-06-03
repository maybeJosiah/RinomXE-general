=begin
5/1/2025, 1:54PM, begin making simpler version. X E.
2:27PM, begin tests. X E. 2:43PM, like done. X E.
2:47PM, begin making z version. X E. 3:48PM, done. X E.
3:51PM, done. X E.
5/6/2025, 4:32PM, done. X E. 4:33PM, done better. X E.
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
11:07AM, like done, X E. 11:10AM, like done,  X E.
11:15AM, like done, X E. 6:01PM, like done, X E.
6:17PM, like done, X E.
*/
#7/26/2023, 12:41PM, start adding import. 12:42PM, done.
#import Darwin
#7/26/2023, 12:42PM, start. 2:48PM, done, X E.
=end
#This is mainly a utility class for functions.
class RinomMathXE
  #This function returns whether things are like equal with conditions like rounding or in range.
  #8/9/2023, 1:23PM, done getDistance.
  ##8/3/2023, 3:54PM, done getDistance.
  ##7/26/2023, 12:51PM, start. 1:01PM, done.
  def self.precisionEquals?(number, compareTo, roundWith=1.0, shouldRound=false, precPad=0.0)
    #Checks, if it can then return true but false if all fails.
    if (number==compareTo)
      #X E
      return true
      #X E
    elsif (shouldRound)
      #7/23/2024, 12:56PM, start fix. 12:57PM, done. 1:00PM, continued. done. X E.
      #1:07PM, better all now. X E.
      if ((number*roundWith).round().to_f()/roundWith==
        (compareTo*roundWith).round().to_f()/roundWith)
        #X E
        return true
        #X E
      elsif ((number*roundWith).round().to_f()/roundWith==compareTo)
        #X E
        return true
        #X E
      end
    end
    if (precPad != 0.0)
      #X E
      return (compareTo >= number-precPad && compareTo <= number+precPad) || (number >= compareTo-precPad && number <= compareTo+precPad)
      #X E
    end
    #X E
    return false
    #X E.
  end
  #X E
  #This function takes all but last 2 as constants and uses last 2 as dynamic for reusage.
  #It takes a 3d+ point and puts it in 2d on view plane.
  #8/9/2023, 1:31PM, done precisionEquals?.
  #8/3/2023, 3:56PM, done precisionEquals.
  #7/26/2023, 1:01PM, 1:02PM, start. 1:31PM, done, X E. 1:36PM, fix. 5:08PM, fix.
  def self.to2dPoint(point, viewPoint, viewAtPoint, xyz, numbers, roundWith=1.0, shouldRound=false,precPad=0.0, index=0)
    #8/1/2023, 10:44AM, 10:45AM, fixes.
    #6/19/2024, 1:46PM, start fixes. 239PM, resume work.
    #x=x0+(x1-x0)t
    #finding t: (x-x0)/(x1-x0)=t
    if (numbers[2].abs()>(point[xyz[2]]-viewPoint[xyz[2]]).abs())
      #Too close, X E.
      return nil
      #X E
    elsif ((numbers[2] >= -0.0) != (point[xyz[2]]-viewPoint[xyz[2]] >= -0.0))
      #Wrong way, X E.
      return nil
      #X E
    end
    #7/2/2024, 10:52AM, start work. 11:23AM, done.
    #x=x0+(ex-x0)*t
    #find t?
    #we have a second x, viewAtPoint, use it.
    #(x-x0)/(ex-x0)=t
    #Check for in view plane.
    index = point.length-1
    while ((index==xyz[0]||index==xyz[1]||index==xyz[2])&&index != -1)
      index-=1
    end
    while (index != -1)
      if (!RinomMathXE.precisionEquals?(viewPoint[index]+(point[index]-viewPoint[index])*numbers[2]/(point[xyz[2]]-viewPoint[xyz[2]]),viewAtPoint[index],roundWith,shouldRound,precPad))
        #Not to view plane, X E.
        return nil
        #X E
      end
      index-=1
      while ((index==xyz[0]||index==xyz[1]||index==xyz[2])&&index != -1)
        index-=1
      end
    end
    #To view plane, return x and y, X E.
    return [numbers[0]+(point[xyz[0]]-viewPoint[xyz[0]])*numbers[2]/(point[xyz[2]]-viewPoint[xyz[2]]), numbers[1]+(point[xyz[1]]-viewPoint[xyz[1]])*numbers[2]/(point[xyz[2]]-viewPoint[xyz[2]])]
    #X E
  end
  #X E
  #5/1/2025, 2:56PM, start. 2:59PM, done. 3:01PM, done.
  def self.compare(zd,zd1)
    if (zd[0]<zd1[0])
      #X E
      return true
      #X E
    elsif (zd[0]>zd1[0])
      #X E
      return false
      #X E
    end
    #X E
    return zd[1]<=zd1[1]
    #X E
  end
  #X E
  #5/1/2025, 1:58PM, start. 2:10PM, done. 2:56PM, done again.
  def self.shapeDistance(viewPoint,points,points2d,indices,z,indexer=Array.new(2,0),numbers=Array.new(2,0.0))
    if (indices.length==0)
      #X E
      return [-2.0,-1.0]
      #X E
    end
    indexer[0]=indices.length-1
    numbers[0]=0.0
    numbers[1]=0.0
    while (indexer[0] != -1)
      if (points2d[indices[indexer[0]]]==nil)
        #X E
        return [-1.0,-1.0]
        #X E
      end
      numbers[0]+=points[indices[indexer[0]]][z]-viewPoint[z]
      numbers[1]+=Math.sqrt(points2d[indices[indexer[0]]][0]*points2d[indices[indexer[0]]][0]+points2d[indices[indexer[0]]][1]*points2d[indices[indexer[0]]][1])
      indexer[0]-=1
    end
    #X E
    return [numbers[0].abs()/indices.length.to_f(),numbers[1]/indices.length.to_f()]
    #X E
  end
  #X E
end
#X E
#8/9/2023, 2:08PM, done RinomMathXE. 2:09PM.
#8/3/2023, 4:14PM, done RinomMathXE.
#StinomDrawXE is a main class for using Stinom.
#7/26/2023, 2:53PM, start. 6:18PM, done, X E.
class RinomDrawXE
  #7/19/2024, 6:17PM, start making variables on this not each time. 6:18PM, X E.
  #7/26/2023, 2:54PM, start variables. 8/1/2023, 6:00PM, start fixes. 6:01PM, done.
  attr_accessor :points, :points2d, :shapes, :drawOrder, :shapeIndex, :pointIndex, :xyz, :viewPoint, :viewAtPoint, :dists, :index, :funcIndex, :indices, :indices1, :numbers
  #7/26/2023, 2:57PM, done variables, X E. 2:59PM, added dimens, X E. 3:00PM, added view points, X E.
  #8/3/2023, 4:16PM, done variable.
  #8/9/2023, 2:13PM, done variables.
  #Make an instance, all things have an affect.
  #7/26/2023, 2:58PM, start. 3:10PM, done.
  def initialize(viewPoint, viewAtDimens, x=0, y=1, z=2, pointCapacity=0, shapeCapacity=0)
    @viewPoint=viewPoint
    @viewAtPoint=viewAtDimens
    @xyz=[x,y,z]
    #8/1/2023, 6:16PM, fix.
    @drawOrder=Array.new(shapeCapacity,0)
    @points=Array.new(pointCapacity,nil)
    @points2d=Array.new(pointCapacity,nil)
    @shapes=Array.new(shapeCapacity,nil)
    @shapeIndex=0
    @pointIndex=0
    #X E
  end
  #X E
  #reset so you can begin inputs again.
  #7/2/2024, 11:36AM, 11:37AM, start. 11:37AM, done.
  def reset()
    @pointIndex=0
    @shapeIndex=0
    #X E
  end
  #X E
  #8/9/2023, 2:20PM, done initialize.
  #8/3/2023, 4:20PM,done constructor. 4:21PM.
  #Add a 3d+ point.
  #7/26/2023, 4:45PM, start. 4:49PM, done. 4:50PM, fix.
  def addPoint(point)
    if (@points.length==@pointIndex)
      @points.push(point)
    else
      @points[@pointIndex]=point
    end
    @pointIndex+=1
    #X E
  end
  #X E
  #8/9/2023, 2:24PM, done addPoint.
  #8/3/2023, 4:22PM, done addPoint. 4:23PM, fix to it.
  #Add a shape made of indices of points as input.
  #7/26/2023, 4:49PM, start.  4:51PM, done, X E.
  def addShape(shape)
    if (@shapes.length==@shapeIndex)
      @shapes.push(shape)
    else
      @shapes[@shapeIndex]=shape
    end
    @shapeIndex+=1
    #X E
  end
  #X E
  #8/9/2023, 2:27PM, done addShape.
  #8/3/2023, 4:24PM, done addShape.
  #Set 2d point values based on 3d+ point values.
  #7/26/2023, 4:52PM, start. 5:07PM, done. 5:14PM, fix.
  def set2dPoints(roundWith=1.0,shouldRound=false,precPad=0.0)
    #First make points2d correct length.
    if (@pointIndex>@points2d.length)
      @points2d=Array.new(@pointIndex,nil)
    end
    #Next initialize variables.
    @index=@pointIndex-1
    @funcIndex=0
    @numbers=[@viewPoint[@xyz[0]]-@viewAtPoint[@xyz[0]],@viewPoint[@xyz[1]]-@viewAtPoint[@xyz[1]],@viewAtPoint[@xyz[2]]-@viewPoint[@xyz[2]]]
    #Set 2d points.
    while (@index != -1)
      @points2d[@index]=RinomMathXE.to2dPoint(@points[@index],@viewPoint,@viewAtPoint,@xyz,@numbers,roundWith,shouldRound,precPad,@funcIndex)
      @index-=1
    end
    #X E
  end
  #X E
  #Offset 2d points by a value set.
  #3/12/2024, 7:00PM, start. 7:02PM, done and fixed set2dPoints. X E.
  def offset(offsets=[0.0,0.0])
    @index=@pointIndex-1
    while (@index != -1)
      if (@points2d[@index] != nil)
        @points2d[@index][0]+=offsets[0]
        @points2d[@index][1]+=offsets[1]
      end
      @index-=1
    end
    #X E
  end
  #X E
  #12/17/2024, 7:03PM, start. 7:04PM, done.
  def reverseX()
    @index=@pointIndex-1
    while (@index != -1)
      if (@points2d[@index] != nil)
        @points2d[@index][0] = -@points2d[@index][0]
      end
      @index-=1
    end
    #X E
  end
  #X E
  #12/17/2024, 7:04PM, start. 7:05PM, done. 7:07PM, done. X E.
  def reverseY()
    @index=@pointIndex-1
    while (@index != -1)
      if (@points2d[@index] != nil)
        @points2d[@index][1] = -@points2d[@index][1]
      end
      @index-=1
    end
    #X E
  end
  #X E
  #8/9/2023, 2:33PM, done set2dPoints. 2:34PM.
  #8/3/2023, 4:29PM, done set2dPoints.
  #Set draw order of all shapes.
  #7/26/2023, 5:09PM, start. 6:18PM, done, X E. 3/12/2024, 6:52PM, start fixes. 7:00PM, done.
  def setDrawOrder()
    #5/1/2025, 2:07PM, start revamp.
    #Check if nothing to order.
    if (@shapeIndex<2)
      #X E
      return
      #X E
    end
    #First make draw order correct size.
    if (@drawOrder.length<@shapeIndex)
      @drawOrder=Array.new(@shapeIndex,-1)
    end
    if (@dists==nil)
      @dists=Array.new(@shapeIndex,[-3.0,-3.0])
    elsif (@dists.length<@shapeIndex)
      @dists=Array.new(@shapeIndex,[-3.0,-3.0])
    end
    #First initialize some variables.
    if (@numbers==nil)
      @numbers=Array.new(2,0.0)
    end
    if (@indices1==nil)
      @indices1=Array.new(2,0)
    end
    @indices=[@shapeIndex-1,0,0,2]
    @dists[@indices[0]]=RinomMathXE.shapeDistance(@viewPoint,@points,@points2d,@shapes[@indices[0]],@xyz[2],@indices1,@numbers)
    @dists[@indices[0]-1]=RinomMathXE.shapeDistance(@viewPoint,@points,@points2d,@shapes[@indices[0]-1],@xyz[2],@indices1,@numbers)
    #initial compare.
    if (RinomMathXE.compare(@dists[@indices[0]],@dists[@indices[0]-1]))
      @drawOrder[0]=@indices[0]
      @drawOrder[1]=@indices[0]-1
    else
      @drawOrder[0]=@indices[0]-1
      @drawOrder[1]=@indices[0]
    end
    #Prepare and do rest. This is basically binary sort with input to already sorted.
    @indices[0]-=2
    while (@indices[0] != -1)
      @dists[@indices[0]]=RinomMathXE.shapeDistance(@viewPoint,@points,@points2d,@shapes[@indices[0]],@xyz[2],@indices1,@numbers)
      #Set up bounds.
      @indices[1]=0
      @indices[2]=@indices[3]-1
      while (@indices[1] != @indices[2])
        #Compare.
        if (RinomMathXE.compare(@dists[@indices[0]],@dists[@drawOrder[((@indices[1]+@indices[2]).to_f()/2.0).round()]]))
          #Move upper bound down if after
          if (@indices[1]+1==@indices[2])
            @indices[2]=@indices[1]
          else
            @indices[2]=((@indices[1]+@indices[2]).to_f()/2.0).ceil()
          end
        else
          #Move lower bound up if before
          if (@indices[1]+1==@indices[2])
            @indices[1]=@indices[2]
          else
            @indices[1]=((@indices[1]+@indices[2]).to_f()/2.0).floor()
          end
        end
      end
      #Compare with found index.
      if (RinomMathXE.compare(@dists[@indices[0]],@dists[@drawOrder[@indices[1]]]))
        #If before then rank as such
        @indices[2]=@indices[1]
      else
        @indices[2]=@indices[1]+1
      end
      #Move all at or above found up one.
      @indices[1]=@indices[3]
      while (@indices[1] != @indices[2])
        @drawOrder[@indices[1]]=@drawOrder[@indices[1]-1]
        @indices[1]-=1
      end
      @drawOrder[@indices[2]]=@indices[0]
      @indices[0]-=1
      @indices[3]+=1
    end
    #X E
  end
  #X E
end
#X E
#8/3/2023, 4:40PM, done SinomDrawXE.
#8/9/2023, 3:03PM, done SinomDrawXE.
