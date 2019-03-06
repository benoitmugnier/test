var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from '@angular/core';
import { ClusterManager } from '../services/managers/cluster-manager';
import { MarkerManager, InfoWindowManager } from '@agm/core';
/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = /** @class */ (function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
    }
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = function () {
        this._clusterManager.clearMarkers();
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = function () {
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "gridSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "maxZoom", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgmMarkerCluster.prototype, "zoomOnClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgmMarkerCluster.prototype, "averageCenter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "minimumClusterSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgmMarkerCluster.prototype, "styles", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmMarkerCluster.prototype, "imagePath", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmMarkerCluster.prototype, "imageExtension", void 0);
    AgmMarkerCluster = __decorate([
        Directive({
            selector: 'agm-marker-cluster',
            providers: [
                ClusterManager,
                { provide: MarkerManager, useExisting: ClusterManager },
                InfoWindowManager,
            ]
        }),
        __metadata("design:paramtypes", [ClusterManager])
    ], AgmMarkerCluster);
    return AgmMarkerCluster;
}());
export { AgmMarkerCluster };
//# sourceMappingURL=marker-cluster.js.map