var test=new RinomDrawXE([0,0,-1],[0,0,0]);
for (let i = 10000; i != 0; i--) {
    test.addPoint([Math.random()*100,Math.random()*100,1+Math.random()]);
    test.addPoint([-Math.random()*100,-Math.random()*100,1+Math.random()]);
    test.addPoint([Math.random()*100,Math.random()*100,1+Math.random()]);
    test.addShape([i*3-3,i*3-2,i*3-1]);
    test.addShape([i*3-3,i*3-2]);
    test.addShape([i*3-3]);
}
test.set2dPoints();
test.setDrawOrder();
test;
//X E
