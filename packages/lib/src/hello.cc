// hello.cc
#include <node.h>

namespace demo
{

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  void Method(const FunctionCallbackInfo<Value> &args)
  {
    Isolate *isolate = args.GetIsolate();

    v8::Local<v8::String> name;
    name = args[0].As<v8::String>();

    args.GetReturnValue().Set(
        String::Concat(isolate,
                       String::NewFromUtf8(
                           isolate, "Hello ",
                           v8::NewStringType::kInternalized)
                           .ToLocalChecked(),
                       name));
  }

  void Initialize(Local<Object> exports)
  {
    NODE_SET_METHOD(exports, "hello", Method);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace demo
