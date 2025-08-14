package com.example.bmi;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        EditText editWeight,editHeightInc,editHeightFt;
        Button btnCalculate;
        TextView txtResult,WTxt,HFtTxt,HInTxt;
        LinearLayout llMain;



        editWeight=findViewById(R.id.edtWeight);
        editHeightFt=findViewById(R.id.edtHeightFt);
        editHeightInc=findViewById(R.id.edtHeightInc);
        btnCalculate=findViewById(R.id.btnCalculate);
        txtResult=findViewById(R.id.tvResult);
        llMain=findViewById(R.id.llMain);
        WTxt=findViewById(R.id.WTxt);
        HFtTxt=findViewById(R.id.HFtTxt);
        HInTxt=findViewById(R.id.HInTxt);




        btnCalculate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int wt = Integer.parseInt(editWeight.getText().toString());
                int Ft = Integer.parseInt(editHeightFt.getText().toString());
                int In = Integer.parseInt(editHeightInc.getText().toString());

                int totalInt=Ft*12+In;
                double totalCm=totalInt*2.53;
                double totalM=totalCm/100;
                double bmi=wt/(totalM*totalM);

                if(bmi>25){
                    txtResult.setText(R.string.OverWeight);
                    WTxt.setTextColor(getResources().getColor(R.color.white));
                    HFtTxt.setTextColor(getResources().getColor(R.color.white));
                    HInTxt.setTextColor(getResources().getColor(R.color.white));
                    txtResult.setTextColor(getResources().getColor(R.color.white));
                    llMain.setBackgroundColor(getResources().getColor(R.color.over_weight));
                }else if(bmi<18){
                    txtResult.setText(R.string.UnderWeight);
                    WTxt.setTextColor(getResources().getColor(R.color.black));
                    HFtTxt.setTextColor(getResources().getColor(R.color.black));
                    HInTxt.setTextColor(getResources().getColor(R.color.black));
                    txtResult.setTextColor(getResources().getColor(R.color.black));
                    llMain.setBackgroundColor(getResources().getColor(R.color.underweight));
                }else{
                    txtResult.setText(R.string.healthy);
                    llMain.setBackgroundColor(getResources().getColor(R.color.healthy));
                }
            }
        });



    }
}