function Polygon( sides, center_x, center_y, radius ){

    this.sides = sides;
    this.center_x = center_x;
    this.center_y = center_y;
    this.radius = radius;
    this.draw_to_center = false;
    this.angle =  2 * Math.PI / this.sides;
    this.vertices = function(){

        var vertices = [];

        for (i=0; i < this.sides; i++){

            var x = this.center_x + this.radius * Math.sin( i * this.angle );
            var y = this.center_y + this.radius * Math.cos( i * this.angle );

            vertices.push({x:x, y:y});

        }

        return vertices;

    }

    this.draw = function( context ){

        var vertices = this.vertices();

        for (i=0; i < this.sides; i++){

            if( this.draw_to_center == true ){
                context.moveTo(vertices[i].x, vertices[i].y);
                context.lineTo(this.center_x,this.center_y);
            }

            context.moveTo(vertices[i].x, vertices[i].y);

            if ( i == this.sides - 1 ){

                context.lineTo( vertices[0].x, vertices[0].y);

            }
            else{

                context.lineTo( vertices[i+1].x, vertices[i+1].y);

            }

        }
    }

    this.color = function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}
