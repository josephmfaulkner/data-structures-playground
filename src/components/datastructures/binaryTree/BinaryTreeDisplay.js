import React from 'react';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport'

import BinaryTreeNode from './model/BinaryTreeNode';
import { findAllInRenderedTree } from 'react-dom/test-utils';

class BinaryTreeDisplay extends React.Component {

    constructor(props){
        super(props);
    }

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

        this.renderBinaryTree(this.props.treeData, 500, 500, 1);
    
        this.app.start();

      }

    componentWillUnmount() {
        this.app.stop();
    }  


    drawNode(treeNode, x, y){
        let circle = new PIXI.Graphics();
        circle.lineStyle(4, 0x000000, 1);
        circle.beginFill(0xFFFFFF, 1);
        circle.drawCircle(x , y, 50);
        circle.endFill();
        treeNode.nodeRender = circle;
        this.viewPort.addChild(circle);


        let textStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 70,
            strokeThickness: 3,
            wordWrap: false,
            wordWrapWidth: 440,
            lineJoin: 'round'
        });

        let nodeData = new PIXI.Text(treeNode.data, textStyle);
        nodeData.x = x - 40;
        nodeData.y = y - 42;
        this.viewPort.addChild(nodeData);

    }

    drawBranch(x1, y1, x2, y2)
    {
        let xDiff = x2 - x1; 
        let yDiff = y2 - y1;

        let branchLine = new PIXI.Graphics();

        branchLine.lineStyle(10, 0xFFFFFF, 1);
        branchLine.moveTo(0, 0);
        branchLine.lineTo(xDiff, yDiff);
        branchLine.position.x = x1;
        branchLine.position.y = y1;

        this.viewPort.addChild(branchLine);
    }




    renderBinaryTree(treeNode, x, y, level){
        if(treeNode == null)
        {
            return;
        }

        let xOffSet = 30 / (2 ** level) * this.props.scale;
        let yOffSet = 5 * this.props.scale;

        if(treeNode.leftNode != null)
        {
            this.drawBranch(x , y, x - xOffSet, y + yOffSet);
            this.renderBinaryTree(treeNode.leftNode, x - xOffSet, y + yOffSet, level + 1);
        }

        if(treeNode.rightNode != null)
        {
            this.drawBranch(x , y, x + xOffSet, y + yOffSet);
            this.renderBinaryTree(treeNode.rightNode, x + xOffSet, y + yOffSet, level + 1);
        }

        this.drawNode(treeNode, x, y);

        

        

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