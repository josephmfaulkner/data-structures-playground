import React from 'react';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport'

class BinaryTreeDisplay extends React.Component {


    componentDidMount() {
        this.app = new PIXI.Application(
                {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    transparent: true,
                }
            );
    
        this.viewPort = new Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: 1000,
            worldHeight: 1000,
            interaction: this.app.renderer.plugins.interaction
    
        })
    
        this.viewPort
            .drag()
            .wheel()
            .pinch()
            .decelerate();

        this.viewPort.zoomPercent(-0.50,true);    
    
        this.canvas.appendChild(this.app.view);
    
        this.app.stage.addChild(this.viewPort);
    
        //this.seatGroup = new SeatGroup(this.viewPort, {...this.props});
    
        this.seatGroup = new PIXI.Container;
        this.viewPort.addChild(this.seatGroup);


        this.testTreeRender();

    
        this.app.start();
    
        //this.seatGroup.testAdd();
      }

    componentWillUnmount() {
        this.app.stop();
    }  


    testTreeRender(){

        let line = new PIXI.Graphics();
        line.lineStyle(4, 0xFFFFFF, 1);
        line.moveTo(0, 0);
        line.lineTo(200, 200);
        line.position.x = 500;
        line.position.y = 250;
        this.viewPort.addChild(line);

        line = new PIXI.Graphics();
        line.lineStyle(4, 0xFFFFFF, 1);
        line.moveTo(0, 0);
        line.lineTo(-200, 200);
        line.position.x = 500;
        line.position.y = 250;
        this.viewPort.addChild(line);

        let circle = new PIXI.Graphics();
        circle.lineStyle(4, 0x000000, 1);
        circle.beginFill(0xFFFFFF, 1);
        circle.drawCircle(500, 250, 50);
        circle.endFill();
        this.viewPort.addChild(circle);
    
        circle = new PIXI.Graphics();
        circle.lineStyle(4, 0x000000, 1);
        circle.beginFill(0xFFFFFF, 1);
        circle.drawCircle(700, 450, 50);
        circle.endFill();
        this.viewPort.addChild(circle);
        
        circle = new PIXI.Graphics();
        circle.lineStyle(4, 0x000000, 1);
        circle.beginFill(0xFFFFFF, 1);
        circle.drawCircle(300, 450, 50);
        circle.endFill();
        this.viewPort.addChild(circle);

    }



    render(){
        return(
            <div
                className="DataDisplay"
                ref={(canvas) => { this.canvas = canvas}}
            >
            </div>
        );
    }

}

export default BinaryTreeDisplay;