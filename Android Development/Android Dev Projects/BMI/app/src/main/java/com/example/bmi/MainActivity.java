package com.example.bmi;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
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
        TextView txtResult;

        editWeight=findViewById(R.id.edtWeight);
        editHeightFt=findViewById(R.id.edtHeightFt);
        editHeightInc=findViewById(R.id.edtHeightInc);
        btnCalculate=findViewById(R.id.btnCalculate);
        txtResult=findViewById(R.id.tvResult);

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
                }else if(bmi<18){
                    txtResult.setText(R.string.UnderWeight);
                }else{
                    txtResult.setText(R.string.healthy);
                }
            }
        });



    }
}