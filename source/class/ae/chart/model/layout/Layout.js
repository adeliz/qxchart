﻿/**
 * Layout
 */
qx.Class.define("ae.chart.model.layout.Layout", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {

		/*angularaxis : {
			
		}*/
		
		/**
		 * Annotations
		 */
		annotations : {
			check : "qx.data.Array",
			apply : "_apply",
			init : new qx.data.Array()
		},
		
		/**
		 * Determines whether or not the dimensions of the figure are computed as a function of the display size.
		 */
		autosize : {
			check : [true,false,"initial"],
			apply : "_apply",
			init : true
		},
		
		/**
		 * For polar plots only. Sets the direction corresponding to positive angles.
		 */
		direction : {
			check : ["clockwise","counterclockwise"],
			apply : "_apply",
			init : null
		},
		
		/**
		 * Determines the mode of drag interactions. *select* and *lasso* apply only to scatter traces with markers or text. *orbit* and *turntable* apply only to 3D scenes.
		 */
		dragmode : {
			check : ["zoom","pan","select","lasso","orbit","turntable"],
			apply : "_apply",
			init : "zoom"
		},
		
		/**
		 * Sets the global font. Note that fonts used in traces and other layout components inherit from the global font.
		 */
		font : {
			check : "qx.bom.Font",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/*
		geo : {
		 
		}
		*/
		
		/**
		 * Sets the plot's height (in px).
		 */
		height : {
			check : "Number",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Determines the mode of hover interactions.
		 */
		hovermode : {
			check : ["x","y","closest",false],
			apply : "_apply",
			init : null
		},
		
		/**
		 * images
		 */
		images : {
			check : "qx.data.Array",
			apply : "_apply",
			init : new qx.data.Array()
		},
		
		/*
		legend : {
		
		},
		
		margin : {
		
		},
		*/
		
		/**
		 * For polar plots only. Rotates the entire polar by the given angle.
		 */
		orientation : {
			check : "Number",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the color of paper where the graph is drawn.
		 */
		paper_bgcolor : {
			check : "String",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the color of plotting area in-between x and y axes.
		 */
		plot_bgcolor : {
			check : "String",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/*
		radialaxis : {
		
		},
		
		scene : {
		
		},
		*/
		
		/**
		 * Sets the decimal and thousand separators. For example, *. * puts a '.' before decimals and a space between thousands.
		 */
		separators : {
			check : "String",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Shapes
		 */
		shapes : {
			check : "qx.data.Array",
			apply : "_apply",
			init : new qx.data.Array()
		},
		
		/**
		 * Determines whether or not a legend is drawn.
		 */
		showlegend : {
			check : "Booleany",
			apply : "_apply",
			init : null
		},
		
		/*
		ternary : {
		
		},
		*/
		
		/**
		 * Sets the plot's title.
		 */
		title : {
			check : "String",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the title font. Only family, color and size work
		 */
		titlefont : {
			check : "qx.bom.Font",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the plot's width (in px).
		 */
		width : {
			check : "Number",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * x axes
		 */
		xaxes : {
			check : "qx.data.Array",
			apply : "_apply",
			init : new qx.data.Array()
		},
		
		/**
		 * y axes
		 */
		yaxes : {
			check : "qx.data.Array",
			apply : "_apply",
			init : new qx.data.Array()
		},
		
		/*****************  BAR CHART ONLY ************/
		
		/**
		 * Determines how bars at the same location coordinate are displayed on the graph. With *stack*, the bars are stacked on top of one another With *relative*, the bars are stacked on top of one another, with negative values below the axis, positive values above With *group*, the bars are plotted next to one another centered around the shared location. With *overlay*, the bars are plotted over one another, you might need to an *opacity* to see multiple bars.
		 */
		barmode : {
			check : ["stack","group","overlay","relative"],
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the normalization for bar traces on the graph. With *fraction*, the value of each bar is divide by the sum of the values at the location coordinate. With *percent*, the results form *fraction* are presented in percents.
		 */
		barnorm : {
			check : ["","percent","fraction"],
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the gap (in plot fraction) between bars of adjacent location coordinates.
		 */
		bargap : {
			check : "Number",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the gap (in plot fraction) between bars of the same location coordinate.
		 */
		bargroupgap : {
			check : "Number",
			apply : "_apply",
			init : null
		},
		
		/***************** PIE CHART ONLY ************/
		
		/**
		 * Hidden labels
		 */
		hiddenlabels : {
			check : "Array",
			apply : "_apply",
			init : null
		}
	},


	construct : function() {
		this.base(arguments);

	},
	
	members : {
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
		
	}
});