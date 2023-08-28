var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
var Component = /** @class */ (function () {
    function Component(identity) {
        this.identity = identity
    }
    /**
     * Optionally, the base Component can declare an interface for setting and
     * accessing a parent of the component in a tree structure. It can also
     * provide some default implementation for these methods.
     */
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    /**
     * In some cases, it would be beneficial to define the child-management
     * operations right in the base Component class. This way, you won't need to
     * expose any concrete component classes to the client code, even during the
     * object tree assembly. The downside is that these methods will be empty
     * for the leaf-level components.
     */
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    Component.prototype.isComposite = function () {
        return false;
    };
    return Component;
}());
/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 *
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return this.identity;
    };
    return Leaf;
}(Component));
/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    /**
     * A composite object can add or remove other components (both simple or
     * complex) to or from its child list.
     */
    Composite.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Composite.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Composite.prototype.isComposite = function () {
        return true;
    };
    /**
     * The Composite executes its primary logic in a particular way. It
     * traverses recursively through all its children, collecting and summing
     * their results. Since the composite's children pass these calls to their
     * children and so forth, the whole object tree is traversed as a result.
     */
    Composite.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return `${this.identity}(`.concat(results.join('+'), ")");
    };
    return Composite;
}(Component));
/**
 * The client code works with all of the components via the base interface.
 */
function clientCodeComposite(component) {
    // ...
    console.log("RESULT: ".concat(component.operation()));
    // ...
}
/**
 * This way the client code can support the simple leaf components...
 */
debugger
var simple = new Leaf('Leaf_000');
console.log('Client: I\'ve got a simple component:');
clientCodeComposite(simple);
console.log('');
/**
 * ...as well as the complex composites.
 */
var tree = new Composite('Tree_000');
var branch1 = new Composite('Branch_000');
branch1.add(new Leaf('Leaf_001'));
branch1.add(new Leaf('Leaf_002'));
var branch2 = new Composite('Branch_001');
branch2.add(new Leaf('Leaf_003'));
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCodeComposite(tree);
console.log('');
/**
 * Thanks to the fact that the child-management operations are declared in the
 * base Component class, the client code can work with any component, simple or
 * complex, without depending on their concrete classes.
 */
function clientCodeComposite2(component1, component2) {
    // ...
    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log("RESULT: ".concat(component1.operation()));
    // ...
}
console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCodeComposite2(tree, simple);
