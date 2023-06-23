class Led  {

	pixeles = [];
	
	xMinima = 0;
	xMaxima = 0;
	yMinima = 0;
	yMaxima = 0;
	
	constructor(x, y)  {
	
		this.agregarpixel(x, y);
		this.xMinima = x;
		this.xMaxima = x;
		this.yMinima = y;
		this.yMaxima = y;
		
		/*console.log("newpixel");
		console.log(x);
		console.log(y);*/
	}
	
	agregarpixel(x, y)  {
		
		this.pixeles.push( {x: x, y: y} );
		
		if(x < this.xMinima)  {
			
			this.xMinima = x;
		}
		if(x > this.xMaxima)  {
			
			this.xMaxima = x
		}
		
		this.yMinima = y < this.yMinima ? y : this.yMinima;
		
		this.yMaxima = y > this.yMaxima ? y : this.yMaxima;
	}
	
	estaCerca(x, y)  {
		
		if(x >= this.xMinima && x <= this.xMaxima && 
		   y >= this.yMinima && y <= this.yMaxima)   {
			   
			return true;  
		}
		
		var distx = 0;
		var disty = 0;
		
		if (x < this.xMinima)  {
			
			distx = this.xMinima - x;
		}
		
		if (x > this.xMaxima)   {
			
			distx = x - this.xMaxima;
		}
		
		if (y < this.yMinima)  {
			
			disty = this.yMinima - y;
		}
		
		if (y > this.yMaxima)  {
			
			disty = y - this.yMaxima;
		}
		
		var distanciaabs = distx + disty;
		
		return distanciaabs < 10;

		/*for(var p = 0; p < this.pixeles.length; p++)  {
		
			var menorDist = -1;
			var distancia = Math.sqrt(
				Math.pow(this.pixeles[p].x - x, 2) + 
				Math.pow(this.pixeles[p].y - y, 2)
			);
			
			if(menorDist == -1 || distancia < menorDist)  {
				
				menorDist = distancia;
			}
		}
		
		if(menorDist <= 50)   {
			
			return true;
		}
		
		return false;*/
	}
	
	dibujar(ctx)  {
		
		ctx.strokeStyle="#00f";
		ctx.linewidth = 4;
		ctx.beginPath();	
		
		var x = this.xMinima;
		var y = this.yMinima;
		var width = this.xMaxima - this.xMinima;
		var height = this.yMaxima - this.yMinima;
		
		ctx.rect(x, y, width, height)
		
		ctx.stroke();
		
		/*console.log("newsqr");
		console.log(x);
		console.log(y);
		console.log(width);
		console.log(height);*/
	}
}