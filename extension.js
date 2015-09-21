const ScreenShield = imports.ui.screenShield;

let _onUserBecameActiveOrig;

function _onUserBecameActiveInjected()
{
    this._liftShield(true /* onPrimary */, 0 /* velocity */);
    _onUserBecameActiveOrig.call(this);
}

function init()
{
}

function enable()
{
    _onUserBecameActiveOrig =
        ScreenShield.ScreenShield.prototype._onUserBecameActive;
    ScreenShield.ScreenShield.prototype._onUserBecameActive =
        _onUserBecameActiveInjected;
}

function disable()
{
    ScreenShield.ScreenShield.prototype._onUserBecameActive =
        _onUserBecameActiveOrig;
}
