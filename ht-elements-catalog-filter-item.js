"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-iconset-svg";
import "@polymer/iron-icon/iron-icon.js";
import { getPathFromParameters } from "./ht-elements-catalog-path-parser.js";
class HTElementsCatalogFilterItem extends LitElement {
  _render({ data, parameters }) {
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        a {
          display:flex;
          font-size:14px;
          align-items:center;
          color:inherit;
          text-decoration: none;
          font-weight:${data.child ? "400" : "600"};
          padding-left:${data.child ? "8px" : "0"};
        }
        

        iron-icon {
            margin-right:2px;
            color: var(--secondary-text-color);
        }

        #container {
          display:flex;
          align-items: center;
          justify-content: space-between;
          height:35px;
        }

        #number {
          color:var(--secondary-text-color);
        }

        [hidden] {
            display:none;
        }
      </style>
       <iron-iconset-svg size="24" name="ht-elements-catalog-filter-item">
          <svg>
            <defs>
                <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
            </defs>
          </svg>
      </iron-iconset-svg>
        <div id="container">
            <a href$=${this._getPath(parameters)}>
                <iron-icon icon="ht-elements-catalog-filter-item:chevron-left" hidden?=${
                  data.child
                }></iron-icon>
                <div>${data.name}</div>
            </a>
            <div id="number">${data.number}</div>
        </div>
`;
  }

  static get is() {
    return "ht-elements-catalog-filter-item";
  }

  static get properties() {
    return {
      data: Object,
      type: String,
      parameters: Object
    };
  }

  constructor() {
    super();
    this.data = {};
    this.type = "";
  }

  _getPath() {
    let path = "";
    if (this.data.parameter === undefined) return;
    let parameters = JSON.parse(JSON.stringify(this.parameters));
    parameters[this.type] = this.data.parameter;
    path = getPathFromParameters(parameters);
    return path;
  }
}
customElements.define(
  HTElementsCatalogFilterItem.is,
  HTElementsCatalogFilterItem
);
