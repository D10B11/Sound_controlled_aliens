function startClassification()
{
   navigator.mediaDevices.getUserMedia({audio:true});
   Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xS7d8bSp2/model.json', modelLoaded) 
}

function modelLoaded()
{
   console.log("modelLoaded");
   Classifier.classify(gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
      console.log(error);
   }
 else
 { console.log(result);
   ramdom_number_r=Math.floor(Math.random()*255) +1;
   ramdom_number_g=Math.floor(Math.random()*255) +1;
   ramdom_number_b=Math.floor(Math.random()*255) +1;

document.getElementById("result_label").innerHTML=result[0].label;
document.getElementById("result_confidence").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
document.getElementById("result_confidence").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";

img=document.getElementById("alien_1");
img1=document.getElementById("alien_2");
img2=document.getElementById("alien_3");
img3=document.getElementById("alien_4");

if(result[0].label=="clap")
{
  img.src="aliens-01.gif";
  img1.src="aliens-02.png";
  img2.src="aliens-03.png"; 
  img3.src="aliens-04.png";
}

else if(result[0].label=="clank")
{
  img.src="aliens-01.png";
  img1.src="aliens-02.gif";
  img2.src="aliens-03.png"; 
  img3.src="aliens-04.png";
}

else if(result[0].label=="bell")
{
  img.src="aliens-01.png";
  img1.src="aliens-02.png";
  img2.src="aliens-03.gif"; 
  img3.src="aliens-04.png";
}

else
{
  img.src="aliens-01.png";
  img1.src="aliens-02.png";
  img2.src="aliens-03.png"; 
  img3.src="aliens-04.gif";
}
}}



