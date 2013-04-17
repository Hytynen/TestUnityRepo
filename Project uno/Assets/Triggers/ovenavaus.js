#pragma strict
var Target : Collider;
var Taso : String;
function Start () {

}
function OnTriggerEnter(collision : Collider){


if (collision != Target){
		return;
	} else {
		if (Taso=="test city"){
			TallennaPaikka.KebubRavintolaPos = collision.transform.position;
			TallennaPaikka.KebubRavintolaPos.z=TallennaPaikka.KebubRavintolaPos.z+2;
		}
		else if (Taso=="KebubRavintola"){
			TallennaPaikka.TestCityPos = collision.transform.position;
			TallennaPaikka.TestCityPos.x = TallennaPaikka.TestCityPos.x+2;
		}
		Application.LoadLevel(Taso);
	}
	}