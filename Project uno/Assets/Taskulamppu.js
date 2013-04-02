#pragma strict
var Lamppu : Transform;

function Start () {
	GetComponent(Taskulamppu).light.range = 0;
}

function Update () {
	if (Input.GetButtonDown("Fire1")){
	
		if (GetComponent(Taskulamppu).light.range == 100){
			GetComponent(Taskulamppu).light.range = 0;
			}else if (GetComponent(Taskulamppu).light.range == 0){
			GetComponent(Taskulamppu).light.range = 100;
			}
			
	}
	if (Input.GetButtonDown("Fire2")){
		
		if(Lamppu.light.range == 50){
		Lamppu.light.range = 0;
		}else if (Lamppu.light.range == 0){
		Lamppu.light.range = 50;
		}
	}	
}