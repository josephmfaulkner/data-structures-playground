import React from 'react';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport'

import BinaryTreeNode from './model/BinaryTreeNode';
import { findAllInRenderedTree } from 'react-dom/test-utils';

class BinaryTreeDisplay extends React.Component {

    constructor(props){
        super(props);
        this.cursorNodeDisplay = null;
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

        this.viewPort.zoomPercent(-0.75,true);    
    
        this.canvas.appendChild(this.app.view);
    
        this.app.stage.addChild(this.viewPort);
    
        this.refreshTreeDisplay();

        this.app.start();

    }

    componentDidUpdate(nextProps, nextState) {
        if(this.props.treeData != nextProps.treeData)
        {
            this.refreshTreeDisplay();
        }

        if(this.props.scale != nextProps.scale)
        {
            this.refreshTreeDisplay();
        }

        if(this.props.cursorNode != nextProps.cursorNode)
        {
            this.updateCursorDisplay();
        }
        
    }

    updateCursorDisplay()
    {
        if(this.cursorNodeDisplay == null)
        {
            this.cursorNodeDisplay = new PIXI.Graphics();
            this.cursorNodeDisplay.lineStyle(4, 0x000000, 1);
            this.cursorNodeDisplay.beginFill(0xFF00FF, 0.5);
            this.cursorNodeDisplay.drawCircle(0 , 0, 70);
            this.cursorNodeDisplay.endFill();
            this.viewPort.addChild(this.cursorNodeDisplay);
        }

        let oldX = this.cursorNodeDisplay.x;
        let oldY = this.cursorNodeDisplay.y;

        let newX = this.props.cursorNode.nodeRender.x;
        let newY = this.props.cursorNode.nodeRender.y;

        console.log(newX, newY);

        //this.cursorNodeDisplay.moveTo(newX, newY);
        //this.cursorNodeDisplay.position.set(newX, newY);
        this.animate(this.cursorNodeDisplay, oldX, oldY, newX, newY, 0.0);
    }




    animate(graphic, fromX, fromY, toX, toY, perc)
    {
        let ticker = this.app.ticker;
        let animateFunction = function() {
            perc += 0.05;
            if(perc > 1.00)
            {
                ticker.remove(animateFunction);
            }

            graphic.position.set(fromX + (toX - fromX) * perc, fromY + (toY - fromY) * perc);

        }

        ticker.add(animateFunction);
    }




    refreshTreeDisplay(){
        this.viewPort.removeChildren();
        this.renderBinaryTree(this.props.treeData, 500, -900, 1);
    }

    componentWillUnmount() {
        this.app.stop();
    }  


    drawNode(treeNode, x, y){
        let circle = new PIXI.Graphics();
        circle.lineStyle(4, 0x000000, 1);
        circle.beginFill(0xFFFFFF, 1);
        circle.drawCircle(0 , 0, 50);
        circle.endFill();
        circle.position.set(x,y);
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
        let yOffSet = 300 ;//* (2 * level - 1);

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