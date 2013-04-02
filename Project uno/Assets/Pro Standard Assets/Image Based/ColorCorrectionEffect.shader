Shader "Hidden/Color Correction Effect" {
Properties {
	_MainTex ("Base (RGB)", 2D) = "white" {}
	_RampTex ("Base (RGB)", 2D) = "grayscaleRamp" {}
}

SubShader {
	Pass {
		ZTest Always Cull Off ZWrite Off
		Fog { Mode off }

CGPROGRAM
#pragma vertex vert_img
#pragma fragment frag
#pragma fragmentoption ARB_precision_hint_fastest
#include "UnityCG.cginc"

uniform sampler2D _MainTex;
uniform sampler2D _RampTex;

half4 frag (v2f_img i) : COLOR
{
	float4 orig = tex2D(_MainTex, i.uv);
	
	half rr = tex2D(_RampTex, orig.rr).r + 0.00001; // numbers to workaround Cg's bug at D3D code generation :(
	half gg = tex2D(_RampTex, orig.gg).g + 0.00002;
	half bb = tex2D(_RampTex, orig.bb).b + 0.00003;
	
	half4 color = half4(rr, gg, bb, orig.a);
	
	return color;
}
ENDCG

	}
}

Fallback off

}